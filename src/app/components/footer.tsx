interface IProduct {
  title?: string;
  paragraph?: string;
  icons?: any;
  title0?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
}
let product: IProduct[] = [
{
  title0: "COMPANY",
  title1: "About",
  title2: "Fatures",
  title3: "Works",
  title4: "Career",
},
{
  title0: "HELP",
  title1: "Customer Support",
  title2: "Delivery Details",
  title3: "Terms & Conditions",
  title4: "Privacy Policy",
},
{
  title0: "FAQ",
  title1: "Account",
  title2: "Manage Deliveries",
  title3: "Orders",
  title4: "Payments",
},
{
  title0: "RESOURCES",
  title1: "Free eBooks",
  title2: "Development Tutorial",
  title3: "How to - Blog",
  title4: "Youtube Playlist",
},
]

export default function Footer() {
  return (
        <div className="md:hidden w-[389px] mt-[-100px] leading-10 mx-2 gap-2 grid grid-cols-2">
          {product.map((data) => {
            return (
              <div className=" ">
              
                <div className="space-y-2">
                  <p className=" tracking-[4px] font-semibold text-lg">
                    {data.title0}
                  </p>
                  <div
                    className="text-[#00000099]"
                  >
                    <p>{data.title1}</p>
                    <p>{data.title2}</p>
                    <p>{data.title3}</p>
                    <p>{data.title4}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    
  );
}
