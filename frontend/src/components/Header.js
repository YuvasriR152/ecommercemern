import Search from "./Search";

export default function Header({cartItems=[]}) {
  return (
    <nav>
      <div className="header-container">
        {/* Left: Logo */}
        <div id="logo">
          <img
            src="/images/Bq-cKJYCQAAHd-K.jpg"
            alt="Yuva Logo"
            style={{ height: '60px', width: 'auto' }}
          />
        </div>

       <Search/>
        

        {/* Right: Cart */}
        <div id="cart">
          <span className="text-black font-sans text-5xl font-weight:bold">Cart</span>
          <span id="cart_count">{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
}





