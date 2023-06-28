import { useState, React } from 'react';
import { kid, kid1, kid2, kid3 } from 'assets/images';

const KidTab = () => {
  const [Kids] = useState([
    {
      id: 1,
      image: kid,
      title: 'Fashion Men Women LED Watches Unisex Digital Watch Sport',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 360',
    },
    {
      id: 2,
      image: kid1,
      title: 'Fashion Bluetooth Smart Watch',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 870',
    },
    {
      id: 3,
      image: kid2,
      title: 'Fashion Simple Hand Ring Watch Sports Electronic Watch',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 390',
    },
    {
      id: 4,
      image: kid3,
      title: 'Skmei LED Digital Watch Black Sport',
      desc: 'This is a unisex watch with an elegant design.',
      Price: 'KSh 1,099',
    },
  ]);

  return (
    <>
      {Kids.map((kid) => (
        <div className="flex flex-row mt-4 mb-4" key={kid.id}>
          <div>
            <img src={kid.image} alt="A watch" />
          </div>
          <div className="ml-8">
            <p className="text-2xl font-semibold">{kid.title}</p>
            <p className="text-2xl">{kid.desc}</p>
            <p className="text-xl">{kid.Price}</p>
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

export default KidTab;
