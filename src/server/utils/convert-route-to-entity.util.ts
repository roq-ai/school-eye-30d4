const mapping: Record<string, string> = {
  homework: 'homework',
  photos: 'photo',
  schools: 'school',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
