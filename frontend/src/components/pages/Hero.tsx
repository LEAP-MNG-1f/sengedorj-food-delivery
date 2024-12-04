export const Hero = () => {
  return (
    <div className="bg-green-500 w-full h-[72vh] flex items-center justify-center relative ">
      <img className="absolute " src="Zurag.png" alt="Delicious Food 1" />
      <div className="absolute inset-0 bg-pattern opacity-20"></div>

      <div className="container m-auto flex justify-between">
        <div className="lg:w-1/2 p-8 z-10">
          <h1 className="text-white text-5xl font-bold pb-[30px]">
            Pinecone
            <br />
            Food Delivery
          </h1>
          <div className="w-[450px] border border-white"></div>
          <p className="text-white text-[25px] pt-[30px]">
            Horem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <div className="lg:w-1/2 relative z-10 flex items-center justify-center">
          <img
            className="w-[250px] lg:w-[588px] absolute right-10 -bottom-10 object-cover rounded-full"
            src="Group.png"
            alt="Delicious Food 2"
          />
        </div>
      </div>
    </div>
  );
};
