import React, { CSSProperties } from "react";
const ContentTemplate: React.FC = () => {
  const styles = {
    contentContainer: {
      width: "446px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Kalpurush",
      
    } as CSSProperties,
   
    title: {
      fontSize: "1rem",
      textAlign: "center",
      fontFamily: "Kalpurush",
    } as CSSProperties,
};

  return (
   
      <div style={styles.contentContainer}>
          <p style={styles.title}>
        কুমিল্লা বাংলাদেশের দক্ষিণ-পূর্ব প্রান্তে অবস্থিত একটি মহানগরী। নগরীর পাশেই রয়েছে গোমতী নদী। প্রাচীন বাংলার শহর গুলোর মধ্যে কুমিল্লা ছিলো অন্যতম। এছাড়াও কুমিল্লা শহর একসময় এিপুরা রাজ্যের রাজধানী ছিল। কুমিল্লা শহরের ডুলিপাড়া এলাকায় রয়েছে কুমিল্লা বিমানবন্দর। বিমানবন্দরের সাথে গড়ে উঠেছে কুমিল্লার ইকোনমিক জোন ইপিজেড সহ বিভিন্ন শিল্প কারখানা।ফলে বিমানবন্দর এলাকা হয়ে উঠেছে ব্যাবসা বাণিজ্যিক একটি শহর। কুমিল্লা শহর একটি বিভাগ কেন্দ্রীক শহর।
          </p>
      </div>
    
  );
};

export default ContentTemplate;
