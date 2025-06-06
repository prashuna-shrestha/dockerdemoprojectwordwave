interface ApiError extends Error {
  status?: number;
}

export async function apiFetch<T = any>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  // Get tokens from storage
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  // Prepare headers
  const headers = new Headers({
    'Content-Type': 'application/json',
    ...options.headers,
  });

  // Add authorization if token exists
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);  // Fixed: Using backticks
  }

  let response = await fetch(url, {
    ...options,
    headers,
  });

  // Handle token refresh if 401 received
  if (response.status === 401 && refreshToken) {
    try {
      const refreshResponse = await fetch('http://localhost:8000/api/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      if (!refreshResponse.ok) throw new Error('Refresh token failed');

      const { access } = await refreshResponse.json();
      localStorage.setItem('token', access);
      
      // Retry original request with new token
      headers.set('Authorization', `Bearer ${access}`);  // Fixed: Using backticks
      response = await fetch(url, {
        ...options,
        headers,
      });
    } catch (error) {
      // Clear auth data and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userData');
      window.location.href = '/login';
      throw error;
    }
  }

  // Handle errors
  if (!response.ok) {
    const error: ApiError = new Error('Request failed');
    error.status = response.status;
    try {
      const errorData = await response.json();
      error.message = errorData.detail || errorData.message || 'Request failed';
    } catch (e) {}
    throw error;
  }

  return response.json();
}