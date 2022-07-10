    const allPage = ()=>{
    return (
        <div class="main-page">
            <div class="main">
                <div class="header">
                    <h1>Online Store</h1>
                    <button class="cart-button"><i class="bi bi-cart"></i> CART <span class="counter"></span></button>

                </div>
                <div class="content">
                    <div>
                        <div class="button-low-width">
                            <p class="site-name">Online Store</p>

                            <button class="cart-button cart-button-low-screen"><i class="bi bi-cart"></i> CART</button>
                            <div class="search-low-screen">
                                <form action="search" ><input class=" shadows" placeholder="Search" type="text"></form>
                            </div>
                            <div class="button-on"><i class="bi bi-filter-right"></i></div>
                            <div class="button-off"><i class="bi bi-x-lg"></i></div> </div>
                        <div class="left-panel" data-element="filters-panel">
                            <div class="filters-panel shadows">
                                <div  class="filters-panel-content">
                                    <div class="price-slider filters">
                                        <h2>Price</h2>
                                    </div>
                                    <div class="category-filters filters">

                                        <h2>Category</h2>
                                        <div>
                                            <ul>
                                                <li><input class="category-checkbox" type="checkbox" id="monitors" name="monitors">
                                                    <label for="monitors">Monitors</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="laptops"  name="laptops">
                                                    <label for="laptops">Laptops</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="video_cards" name="video-cards">
                                                    <label for="video_cards">Video cards</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="gaming_keyboards"  name="gaming-keyboards">
                                                    <label for="gaming_keyboards">Gaming keyboards</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="computer_mouse" name="computer mouse">
                                                    <label for="computer_mouse">Scales</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="ssd" name="ssd">
                                                    <label for="ssd">SSD</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="sound_cards"  name="sound-cards">
                                                    <label for="sound_cards">Sound cards</label></li>
                                                <li><input class="category-checkbox" type="checkbox" id="ram" name="ram">
                                                    <label for="ram">RAM</label></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr>
                                        <div class="brand-filters filters">
                                            <h2>Brand</h2>

                                        </div>
                                        <hr>
                                            <div class="rating-slider">
                                                <h2>Rating</h2>
                                            </div>
                                </div>
                            </div>
                            <button>CLEAR ALL FILTERS</button>

                        </div>
                    </div>
                    <div class="products">

                        <div class="search">
                            <form action="search" ><input class=" shadows" placeholder="Search" type="text"></form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
    }