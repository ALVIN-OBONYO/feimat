import { useState, React } from 'react';
import { Men, Men1, Men2, Men3 } from 'assets/images';

const MenTab = () => {
  const [Mens] = useState([
    {
      id: 1,
      image: Men,
      title: 'Fashion Mens Watches Quartz Watch Graduated Index For Men - Gray',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 1,472',
    },
    {
      id: 2,
      image: Men1,
      title: 'Naviforce Mens Calendar 30M Water Resistant Wrist Watch',
      desc: 'Martini Fashion endeavours to sell quality fashion accessories.',
      Price: 'KSh 2,999',
    },
    {
      id: 3,
      image: Men2,
      title: 'Geneva Men Watches Quartz Wrist Watch LED Backlight',
      desc: 'Men Watches Quartz Wrist Watch LED Backlight.',
      Price: 'KSh 500',
    },
    {
      id: 4,
      image: Men3,
      title: 'Gogoey Mens Watch Sports Minimalistic Watches Leather',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 470',
    },
  ]);

  return (
    <>
      {Mens.map((men) => (
        <div className="flex flex-row mt-4 mb-4" key={men.id}>
          <div>
            <img src={men.image} alt="A watch" />
          </div>
          <div className="ml-8">
            <p className="text-2xl font-semibold">{men.title}</p>
            <p className="text-2xl">{men.desc}</p>
            <p className="text-xl">{men.Price}</p>
            <button
              type="submit"
              className="px-10 py-4 text-xl bg-black rounded text-white mt-4"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenTab;
