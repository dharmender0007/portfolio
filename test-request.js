async function test() {
  const urls = [
    'https://dharmender0007.github.io/portfolio/',
    'https://dharmender0007.github.io/portfolio/profile.png',
    'https://dharmender0007.github.io/portfolio/excel_analytics.jpg'
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(`URL: ${url} -> Status: ${res.status} (${res.statusText})`);
    } catch (e) {
      console.log(`URL: ${url} -> Error: ${e.message}`);
    }
  }
}
test();
