import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-zinc-800 ">
        <div className="container mx-auto  pt-[70px] pb-[80px]">
          <div className="flex justify-left gap-24 pb-[30px]">
            <div className="text-white inline-block">
              <p className="text-slate-400 pb-5">Hujjatlar</p>
              <p className="pb-[8px]">
                {" "}
                <a href="#" className="pb-[8px]">
                  Sotish uchun umumiy shartlar
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Ofertalar arxivi
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Nizom
                </a>
              </p>
              <a href="#" className="pb-[8px]">
                Guvohnoma
              </a>
            </div>
            <div className="text-white inline-block">
              <p className="text-slate-400 pb-5">Servis</p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Muddatli to'lov islomda
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  alif shopda soting!
                </a>
              </p>
              <a href="#">Qaytarish</a>
            </div>
            <div className="text-white inline-block">
              <p className="text-slate-400 pb-5">Tovarlar katalogi</p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Smartfonlar va telefonlar
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Gadjetlar
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Smartfonlar uchun aksessuarlar
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  Tegishli tovarlar
                </a>
              </p>
              <a href="#">Soat va aksessuarlar</a>
            </div>
            <div className="text-white inline-block">
              <p className="text-slate-400 pb-5">
                Biz ijtimoiy axborot vositalarida
              </p>
              <div className="flex justify-left gap-2">
                <img src="insta.webp" alt="" />
                <img src="face.svg" alt="" />
                <img src="telegram.svg" alt="" />
                <img src="insta.svg" alt="" />
                <img src="ok.svg" alt="" />
                <img src="tiktok.svg" alt="" />
              </div>
              <p className="text-slate-400 pb-5 pt-[15px]">Axborot xizmati</p>
              <p className="pb-[8px] ">
                <a href="#" className="pb-[8px]">
                  @alifshop_uz
                </a>
              </p>
              <p className="pb-[8px]">
                <a href="#" className="pb-[8px]">
                  +998 99 425 25 99
                </a>
              </p>
            </div>
          </div>
          <hr className="bg-slate-400" />
          <p className="text-slate-400 pt-[30px] pb-10">2024 © alifshop.uz</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
