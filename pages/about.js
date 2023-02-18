import Head from "next/head";

export default function About() {


    return(

      <>

          <Head>
              <title>من نحن</title>

          </Head>

          <div style={{display: "flex", flexDirection: "column", minHeight: "100vh",
          padding: 20, alignItems: "center"}} >
              <article>سكاي ماب  شـركة متخصصة في مجال التسويق العقاري فى عقارات شرق القاهرة تأسست عام 2010، تعمل الشركة بمهنية عالية بهدف الوصول الي إرضاء عملائها، ذلك عن طريق توفير أهم 3 محاور رئيسية للحصول على عقار مضمون وهما المحور الفنـي والقانوني والإداري. نتطلع إلى تحقيق رغبات عملائنا فى السكن أو الاستثمار العقاري فى الرحاب، مدينتى، سيليا، الشروق والعاصمة الإدارية.</article>
          </div>



      </>
    );

}