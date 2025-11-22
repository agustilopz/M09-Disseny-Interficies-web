
export default function Recepta({ nom, descripcio, imatge }) {
  return (
   <div className="flex flex-col items-start gap-4 bg-white rounded-lg">
    <img src={imatge} alt={nom} className=" w-150 h-75 rounded-t-lg object-cover"></img>
    <h5 className="font-bold text-lg pl-2">{nom}</h5>
    <p className="pl-2">{descripcio}</p>
   </div>
  );
}