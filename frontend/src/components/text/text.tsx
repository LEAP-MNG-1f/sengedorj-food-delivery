// export const SameText = ({ name }) => {
//   return (
//     <div>
//       <h1 className="font-[600]">{name}</h1>
//     </div>
//   );
// };
type SameTextProps = {
  name: string;
};

export const SameText: React.FC<SameTextProps> = ({ name }) => {
  return (
    <div>
      <h1 className="font-[600]">{name}</h1>
    </div>
  );
};
