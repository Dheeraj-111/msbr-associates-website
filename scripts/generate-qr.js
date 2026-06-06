import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certificates = [
  "MSBR-26-GJ-172088",
  "MSBR-26-AS-172089",
  "MSBR-26-RJ-172090",
  "MSBR-26-PM-172091",
  "MSBR-26-AK-172092",
  "MSBR-26-RS-172093",
  "MSBR-26-NJ-172094",
  "MSBR-26-DS-172095",
  "MSBR-26-VM-172096",
  "MSBR-26-KP-172097",
];

const outputDir = path.join(__dirname, "../public/qr");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateQRCodes() {
  for (const id of certificates) {
    const verificationUrl =
      `https://msbr-associates.vercel.app/3/verify?id=${id}`;

    const outputFile =
      path.join(outputDir, `${id}.png`);

    await QRCode.toFile(outputFile, verificationUrl, {
      width: 500,
      margin: 2,
    });

    console.log(`✅ Generated ${id}.png`);
  }

  console.log("\n🎉 All QR codes generated successfully");
}

generateQRCodes();