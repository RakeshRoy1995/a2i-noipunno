import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import customFont from '/Nikosh.ttf';

const PdfGenerator: React.FC = () => {
  const generatePDF = () => {
  
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Load the custom font
    pdf.addFileToVFS('Nikosh.ttf', customFont);
    pdf.addFont('Nikosh.ttf', 'customFont', 'normal');

    // Set the font for the text
    pdf.setFont('customFont');

    // Add content to the PDF
    pdf.text('কুমিল্লা বাংলাদেশের দক্ষিণ-পূর্ব প্রান্তে অবস্থিত একটি মহানগরী। নগরীর পাশেই রয়েছে গোমতী নদী। প্রাচীন বাংলার শহর গুলোর মধ্যে কুমিল্লা ছিলো অন্যতম। এছাড়াও কুমিল্লা শহর একসময় এিপুরা রাজ্যের রাজধানী ছিল। কুমিল্লা শহরের ডুলিপাড়া এলাকায় রয়েছে কুমিল্লা বিমানবন্দর। বিমানবন্দরের সাথে গড়ে উঠেছে কুমিল্লার ইকোনমিক জোন ইপিজেড সহ বিভিন্ন শিল্প কারখানা।ফলে বিমানবন্দর এলাকা হয়ে উঠেছে ব্যাবসা বাণিজ্যিক একটি শহর। কুমিল্লা শহর একটি বিভাগ কেন্দ্রীক শহর।এই জেলার আশেপাশের জেলাগুলো থেকে অনেক লোকজন কুমিল্লায় আসে বিভিন্ন কর্মক্ষেত্রে। এছাড়াও কুমিল্লা শহরের ৫ কিলোমিটার দূরে রয়েছে বিবির বাজার স্থলবন্দর। কুমিল্লা সিটি কর্পোরেশনের আয়তন ৫৩.০৪ বর্গ কিলোমিটার, ফলে মূল শহরের আশেপাশের এলাকা গুলো সিটি কর্পোরেশনের বাহিরে পড়ে গেছে। সিটি কর্পোরেশনের বাহিরে পড়ে যাওয়া শহর এলাকা গুলোকে উপশহর হিসেব ধরা হয়। সিটিকর্পোরেশন এর জনসংখ্যা ৮ লাখ।', 10, 10);

    // Save the PDF
    pdf.save('example.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
