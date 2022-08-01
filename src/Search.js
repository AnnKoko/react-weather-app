import "./Search.css";

export default function Search() {
  return (
    <form id="search-city">
      <div class="search-field-cont rounded-pill border border-1 border-light">
        <input type="text" class="search-field" />
        <button type="submit" class="search-btn">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
