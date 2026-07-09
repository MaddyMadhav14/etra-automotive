export default function sitemap() {
  const baseUrl = "https://etraautomotive.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/explorations`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}