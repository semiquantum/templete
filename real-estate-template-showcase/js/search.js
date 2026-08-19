/**
 * SEARCH & AUTOCOMPLETE HELPER
 * SQ Studio Real Estate Website Template Showcase
 */

const SearchHelper = {
  init() {
    const searchInputs = document.querySelectorAll('.search-input');

    searchInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (typeof PropertyEngine !== 'undefined') {
          PropertyEngine.activeFilters.keyword = val;
          PropertyEngine.applyFiltersAndRender();
        }
      });
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => SearchHelper.init());
} else {
  SearchHelper.init();
}
