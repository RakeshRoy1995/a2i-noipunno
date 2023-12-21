import React from 'react';

const CustomlyMakePDF = () => {

  function generatePDF() {
    const content = document.getElementById('content').innerText;

    // Create a basic PDF structure
    const pdfContent = `%PDF-1.3\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n5 0 obj\n<< /Length 44 >>\nstream\nBT\n/F1 12 Tf\n0 0 Td\n(${content}) Tj\nET\nendstream\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000078 00000 n \n0000000123 00000 n \n0000000174 00000 n \n0000000216 00000 n \ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n228\n%%EOF`;

    // Create a Blob from the PDF content
    const blob = new Blob([pdfContent], { type: 'application/pdf' });

    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'generated.pdf';
    link.click();
  }

  return (
    <div>
      <div id="content">
        <p>কুমিল্লা বাংলাদেশের দক্ষিণ-পূর্ব প্রান্তে অবস্থিত একটি মহানগরী। নগরীর পাশেই রয়েছে গোমতী নদী। প্রাচীন বাংলার শহর গুলোর মধ্যে কুমিল্লা ছিলো অন্যতম। এছাড়াও কুমিল্লা শহর একসময় এিপুরা রাজ্যের রাজধানী ছিল। কুমিল্লা শহরের ডুলিপাড়া এলাকায় রয়েছে কুমিল্লা বিমানবন্দর। বিমানবন্দরের সাথে গড়ে উঠেছে কুমিল্লার ইকোনমিক জোন ইপিজেড সহ বিভিন্ন শিল্প কারখানা।ফলে বিমানবন্দর এলাকা হয়ে উঠেছে ব্যাবসা বাণিজ্যিক একটি শহর। কুমিল্লা শহর একটি বিভাগ কেন্দ্রীক শহর।এই জেলার আশেপাশের জেলাগুলো থেকে অনেক লোকজন কুমিল্লায় আসে বিভিন্ন কর্মক্ষেত্রে। এছাড়াও কুমিল্লা শহরের ৫ কিলোমিটার দূরে রয়েছে বিবির বাজার স্থলবন্দর। কুমিল্লা সিটি কর্পোরেশনের আয়তন ৫৩.০৪ বর্গ কিলোমিটার, ফলে মূল শহরের আশেপাশের এলাকা গুলো সিটি কর্পোরেশনের বাহিরে পড়ে গেছে। সিটি কর্পোরেশনের বাহিরে পড়ে যাওয়া শহর এলাকা গুলোকে উপশহর হিসেব ধরা হয়। সিটিকর্পোরেশন এর জনসংখ্যা ৮ লাখ।</p>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default CustomlyMakePDF;