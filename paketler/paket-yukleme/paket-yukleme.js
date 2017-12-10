const slugify = require('slugify');

const text = "fenerbahçe üçüncü maçına çıkıyor";
const slug = slugify(text, '*');

console.log(slug);
