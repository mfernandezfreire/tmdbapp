export const isAuthenticated = (
  token: string | null ,
  expiresAt: string | null,
) => {
  const isValidToken = expiresAt
    ? new Date(expiresAt).getTime() > new Date().getTime()
    : false;
  if (token && isValidToken) return true
  return false;
}