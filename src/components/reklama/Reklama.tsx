import React from "react";

const Reklama = () => {
  return (
    <div>
      <div className=" bg-slate-100 mt-[200px]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="mt-[-100px]">
              <img src="phone.png" alt="" className="h-[350px] mr-5" />
            </div>
            <div className="text-left ">
              <p className="text-2xl w-[300px] font-bold">
                Ajoyib takliflar har doim yoningizda
              </p>
              <p className="w-[500px] pt-5 pb-5">
                alif shop ilovasi orqali buyurtma qiling, va qulay takliflar
                haqida hammadan tez biling
              </p>
              <div className=" flex justify-left gap-3 ">
                <img src="play-market-icon.svg" alt="" />
                <img src="app-store-icon.svg" alt="" />
                <img src="app-gallery-icon.svg" alt="" />
              </div>
            </div>
            <div className="mx-auto">
              <img
                src="https://alifshop.uz/_ipx/f_webp,s_104x104/images/alifshop-qr-code.webp"
                alt=""
                className="ml-[52px]"
              />
              <p className="w-[200px] text-center pt-5">
                Yuklab olish uchun kamerangizni QR kodga qarating
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="py-[20px]">
              <p className="text-xl font-bold">alif shop</p>
              <p className="w-[300px] pt-3 pb-3">
                alifshop.uz - xaridorlarga tez va qulay tarzda turli xil
                tovarlarni sotib olish imkoniyatini beradigan marketpleys.
                alifshop.uz saytida smartfon, kompyuter, planshet, televizor,
                aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin.
              </p>
              <a href="#" className=" text-sky-500">
                Barchasini ko'rsatish
              </a>
            </div>
            <div className="py-[20px]">
              <p className="text-xl font-bold">
                Smartfonlar muddatli to'lov asosida
              </p>
              <p className="w-[300px] pt-3 pb-3">
                Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik
                hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning
                ilovalari va texnik parametrlari tufayli smartfonlar ko'pincha
                bizning kompyuterlarimiz, kameralarimiz,
              </p>
              <a href="#" className=" text-sky-500">
                Barchasini ko'rsatish
              </a>
            </div>
            <div className="py-[20px]">
              <p className="text-xl font-bold">
                Noutbuklar muddatli to'lov asosida
              </p>
              <p className="w-[300px] pt-3 pb-3">
                Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish
                va shu bilan birga bo'sh vaqtimizni unumli o'tkazish
                imkoniyatini beradi. Masalan, noutbuk yordamida tezda dunyoning
                istalgan nuqtasidan, turli xil ishlarni bajarishingiz
              </p>
              <a href="#" className="text-sky-500">
                Barchasini ko'rsatish
              </a>
            </div>
            <div className="py-[20px]">
              <p className="text-xl font-bold">
                Jihozlar muddatli to'lov asosida
              </p>
              <p className="w-[300px] pt-3 pb-3">
                Bizning online do'konda elektronikadan tashqari, turli xil
                maishiy texnika mavjud: gaz plitalari, grill tayyorlagichlar,
                muzlatgichlar, kir yuvish mashinalari, dazmollar,
                konditsionerlar va boshqa ko'plab almashtirib bo'lmaydigan
                narsalar.
              </p>
              <a href="#" className="  text-sky-500">
                Barchasini ko'rsatish
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reklama;
