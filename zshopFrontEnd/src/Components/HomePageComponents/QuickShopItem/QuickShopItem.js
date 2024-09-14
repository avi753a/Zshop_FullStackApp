import './QuickShopItem.scss';

export function QuickShopItem() {
  return (
    <div className="quickShopItemContainer item-shadow d-flex flex-column justify-content-start align-items-center rounded-2 mt-4 bg-light">
      <div className="quickShopImageContainer w-90 h-60 m-2 rounded">
        <img className="quickShopImage w-100 h-100 rounded" src="/images/image8.png" alt="Quick shop item" />
      </div>
      <div className="quickShopItemInfo d-flex flex-column align-items-center justify-content-between w-90 h-33 md-2">
        <div className="quickShopItemNameRating d-flex flex-row align-items-center justify-content-between w-100">
          <div className='itemName d-flex flex-column justify-content-start'>
            <p className='large-text bold p-0 m-0'>Shiny Dress</p>
            <small align="left" className='small-text'>Al Karam</small>
          </div>
          <div className='itemRating'>
            <span className='icon-star-fill large-text text-gold'></span>
            <span className='icon-star-fill large-text text-gold'></span>
            <span className='icon-star-fill large-text text-gold'></span>
            <span className='icon-star-fill large-text text-gold'></span>
            <span className='icon-star-fill large-text text-gold'></span>
          </div>
        </div>
        <div className='reviewCount d-flex flex-row justify-content-start w-100'>
        <small className='bold small-text'>(4.1k) Reviews</small>
        </div>
        <div className='itemPrice d-flex flex-row align-items-center justify-content-between w-100'>
              <p className='large-text m-0'>$95.50</p>
              <small className='text-danger small-text'>Almost Sold Out</small>
        </div>
      </div>
    </div>
  );
}