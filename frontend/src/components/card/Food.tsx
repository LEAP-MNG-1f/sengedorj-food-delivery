import * as React from "react";

type FoodCardProps = {
  img: string;
  text: string;
  amount: number;
  ingredients: string;
  onOpenModal: () => void;
};

export const FoodCard: React.FC<FoodCardProps> = ({
  img,
  text,
  amount,
  ingredients,
  onOpenModal,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
        isHovered ? "scale-105" : "scale-100"
      }`}
      onClick={onOpenModal}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={img}
        alt={text}
        className="w-full h-[200px] object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{text}</h3>
        <h4 className="text-green-500 font-bold text-xl">{amount}₮</h4>
      </div>
    </div>
  );
};

type FoodModalProps = {
  img: string;
  text: string;
  amount: number;
  ingredient: string;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (quantity: number) => void;
};

export const FoodModal: React.FC<FoodModalProps> = ({
  img,
  text,
  amount,
  ingredient,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    alert(`Таны сагсанд ${quantity} ${text} нэмэгдлээ!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 max-w-[800px] w-[90%] relative transform transition-all duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt={text}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">{text}</h1>
              <h2 className="text-green-500 text-2xl font-bold">
                {amount.toLocaleString()}₮
              </h2>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-700">Орц:</h3>
                <p className="text-gray-600 leading-relaxed">{ingredient}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Тоо ширхэг:</span>
                <div className="flex items-center border-2 rounded-lg overflow-hidden">
                  <button
                    onClick={decreaseQuantity}
                    className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                  >
                    −
                  </button>
                  <span className="w-16 text-center py-2 font-semibold text-gray-700 bg-white">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="px-4 py-2 text-lg font-medium bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Сагслах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
