import cart from "./assets/shopping-cart.svg";

export default function Cart({ carts, onCartdetails }) {
  return (
    <>
      <a href=""
        onClick={(e)=>{e.preventDefault();onCartdetails()}}
      >
        <li className="relative">
          {carts.length > 0 && (
            <span className=" text-green-600 font-bold text-[20px] absolute top-[-22px] right-[-12px]">
              {carts.length}
            </span>
          )}
          <button
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
            href="#"
          >
            <img src={cart} width="24" height="24" alt="" />
          </button>
        </li>
      </a>
    </>
  );
}
