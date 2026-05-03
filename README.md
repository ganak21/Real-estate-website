# NestWise Realty Website

## Project Structure

```
realestate/
├── index.html          ← Homepage
├── properties.html     ← Rent/PG + Buy listings (JSON-driven)
├── airbnb.html         ← Short stay suites (JSON-driven)
├── why-us.html         ← Why choose us page
├── contact.html        ← Contact form (EmailJS)
├── netlify.toml        ← Netlify deploy config
├── css/
│   └── style.css
├── js/
│   └── main.js
└── data/
    ├── rent-pg.json    ← Add/edit rental & PG listings here
    ├── buy.json        ← Add/edit commercial/buy listings here
    └── airbnb.json     ← Add/edit short stay suites here
```

## How to Add More Properties

Edit the JSON files in `data/`. Each property follows this schema:

### rent-pg.json
```json
{
  "id": "unique-id",
  "title": "Property Name",
  "location": "Area, Greater Noida",
  "type": "Apartment / PG / Studio",
  "price": "₹12,000/mo",
  "mainPhoto": "https://your-image-url.jpg",
  "photos": ["url1", "url2", "url3", "url4"],
  "amenities": ["WiFi", "Parking", "AC"],
  "description": "Description here.",
  "beds": "1BHK",
  "baths": 1,
  "area": "600 sq ft",
  "furnished": "Fully Furnished",
  "available": true
}
```

### buy.json
```json
{
  "id": "unique-id",
  "title": "Property Name",
  "location": "Area, Greater Noida",
  "type": "Commercial",
  "subtype": "Office / Shop / Flat",
  "price": "₹45,00,000",
  "priceLabel": "Onwards",
  "mainPhoto": "https://your-image-url.jpg",
  "photos": ["url1", "url2", "url3"],
  "amenities": ["Parking", "Security", "AC"],
  "description": "Description here.",
  "area": "400 sq ft",
  "floors": "Ground Floor",
  "possession": "Ready to Move",
  "available": true
}
```

### airbnb.json
```json
{
  "id": "unique-id",
  "title": "Suite Name",
  "location": "Area, Greater Noida",
  "price": "₹2,500/night",
  "minStay": "1 night",
  "mainPhoto": "https://your-image-url.jpg",
  "photos": ["url1", "url2", "url3", "url4", "url5"],
  "amenities": ["Fully Furnished", "AC", "WiFi", "Smart TV"],
  "description": "Description here.",
  "beds": 1,
  "baths": 1,
  "area": "550 sq ft"
}
```

## EmailJS Setup

1. Sign up at https://www.emailjs.com (free plan allows 200 emails/month)
2. Add an **Email Service** (Gmail works great) → copy the Service ID
3. Create an **Email Template** with these variables:
   - `{{name}}` — sender's name
   - `{{email}}` — sender's email
   - `{{phone}}` — phone number
   - `{{interest}}` — what they're looking for
   - `{{budget}}` — budget
   - `{{message}}` — their message
4. Copy your **Public Key** from Account settings
5. Open `contact.html` and fill in these 3 lines near the bottom:
   ```js
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   ```

## Deploy to Netlify

1. Drag and drop this entire folder onto https://app.netlify.com/drop
   OR
2. Push to GitHub and connect via Netlify dashboard
3. The `netlify.toml` file handles routing automatically.

## Customization

- **Brand name / colors**: Edit `css/style.css` CSS variables at the top
- **Phone / email / address**: Search for `98XXX` and `nestwiserealty.in` in all HTML files
- **Logo**: Replace the "N" logo-mark with an `<img>` tag in each nav
