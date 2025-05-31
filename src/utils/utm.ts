export function getUtmParams(): string {
  if (typeof window === 'undefined') return '';
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content'
  ];

  const params = utmParams
    .map(param => urlParams.get(param))
    .filter(Boolean);

  if (params.length === 0) return '';

  const existingParams = new URLSearchParams();
  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) existingParams.append(param, value);
  });

  return `${existingParams.toString()}`;
}

export function appendUtmToUrl(url: string): string {
  const utmString = getUtmParams();
  if (!utmString) return url;

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${utmString}`;
} 