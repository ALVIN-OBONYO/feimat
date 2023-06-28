import { useState, React } from 'react';
import { women, women1, women2, women3 } from 'assets/images';

const WomenTab = () => {
  const [Womens] = useState([
    {
      id: 1,
      image: women,
      title: 'Luxury Ladies Quartz Watches Casual Dress Wristwatch',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 810',
    },
    {
      id: 2,
      image: women1,
      title: 'Men Women Digital Watch LED Sport Gl Dial',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 290',
    },
    {
      id: 3,
      image: women2,
      title: 'Fashion Hip Hop Iced Out Watch Quartz Luxury Full Diamond Round Sliver',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 990',
    },
    {
      id: 4,
      image: women3,
      title: 'Fashion Hip Hop Iced Out Watch Quartz Luxury Full Diamond Round-Rose Gold',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 990',
    },
  ]);

  return (
    <>
      {Womens.map((women) => (
        <div className="flex flex-row mt-4 mb-4" key={women.id}>
          <div>
            <img src={women.image} alt="A watch" />
          </div>
          <div className="ml-8">
            <p className="text-2xl font-semibold">{women.title}</p>
            <p className="text-2xl">{women.desc}</p>
            <p className="text-xl">{women.Price}</p>
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

export default WomenTab;
