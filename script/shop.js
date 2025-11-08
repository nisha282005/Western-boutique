
        // Shop Page specific DOM elements
        const shopDOM = {
            shopProductGrid: document.getElementById('shopProductGrid'),
            shopProductCount: document.getElementById('shopProductCount'),
            shopSortSelect: document.getElementById('shopSortSelect'),
            shopPagination: document.getElementById('shopPagination'),
            shopPriceRange: document.getElementById('shopPriceRange'),
            shopMinPrice: document.getElementById('shopMinPrice'),
            shopMaxPrice: document.getElementById('shopMaxPrice'),
            shopColorFilters: document.getElementById('shopColorFilters')
        };

        // Shop Page specific state variables
        let currentPage = 1;
        const pageSize = 8;
        let filteredProducts = [];
        let currentFilters = {
            mainCategory: 'All',
            category: 'All',
            minPrice: 0,
            maxPrice: 5000,
            color: 'All',
            sortBy: 'popularity'
        };

        // Initialize shop page on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', function() {
            filteredProducts = [...allProducts]; // Initialize filtered products with all products
            initializeShopPage();
            initializeShopEventListeners();
            updateCartCount(); // Update cart count on load
        });

        function initializeShopPage() {
            applyShopFilters(); // Apply initial filters (which are 'All' by default)
        }

        function initializeShopEventListeners() {
            // Mobile filter button
            document.getElementById('mobileFilterBtn')?.addEventListener('click', function() {
                document.querySelector('#shop aside').classList.toggle('hidden');
            });
            
            // Price range input event listener
            shopDOM.shopPriceRange.addEventListener('input', function() {
                shopDOM.shopMaxPrice.value = this.value;
            });
            shopDOM.shopMinPrice.addEventListener('change', applyShopFilters);
            shopDOM.shopMaxPrice.addEventListener('change', applyShopFilters);

            // Mobile menu toggle
            document.getElementById('mobileMenuBtn').addEventListener('click', function() {
                document.getElementById('mobileMenu').classList.toggle('hidden');
            });

            // Modal close buttons (for cart, size guide, review modals)
            document.querySelectorAll('.modal .close').forEach(btn => {
                btn.addEventListener('click', function() {
                    btn.closest('.modal').style.display = 'none';
                });
            });
            
            // Click outside modal to close
            window.addEventListener('click', function(event) {
                if (event.target.classList.contains('modal')) {
                    event.target.style.display = 'none';
                }
            });

            // Review form submission (if review modal is in shop.html)
            document.getElementById('reviewForm')?.addEventListener('submit', function(e) {
                e.preventDefault();
                const title = document.getElementById('reviewTitle').value;
                const text = document.getElementById('reviewText').value;
                
                if (currentReviewRating === 0) {
                    showToast('Please select a rating', 'error');
                    return;
                }
                
                if (!title || !text) {
                    showToast('Please fill in all fields', 'error');
                    return;
                }
                
                showToast('Thank you for your review!');
                hideModal('reviewModal');
                document.getElementById('reviewForm').reset();
                currentReviewRating = 0;
                document.querySelectorAll('#reviewRatingStars i').forEach(star => {
                    star.classList.remove('fas');
                    star.classList.add('far');
                });
            });
        }

        function renderShopProducts() {
            shopDOM.shopProductGrid.innerHTML = ''; // Clear existing products
            
            const startIdx = (currentPage - 1) * pageSize;
            const endIdx = Math.min(startIdx + pageSize, filteredProducts.length);
            
            for (let i = startIdx; i < endIdx; i++) {
                const product = filteredProducts[i];
                const productCard = document.createElement('div');
                productCard.className = 'bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition product-card flex flex-col items-center text-center';
productCard.innerHTML = `
                    <div class="relative w-full">
                        <img src="${product.colors[0].image}" alt="${product.name}" class="w-full h-64 object-cover rounded-t-lg" id="productImage-${product.id}">
                        <div class="absolute top-2 right-2">
                            <button class="bg-white rounded-full p-2 shadow hover:bg-gray-100" onclick="toggleWishlistFromShop('${product.id}')">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="p-4 w-full">
                        <h3 class="font-medium mb-1">${product.name}</h3>
                        <p class="text-gray-600 mb-2">${product.category}</p>
                        <p class="font-bold text-navy text-lg mb-1">${product.currency}${product.price.toLocaleString()}</p>
                        <div class="flex items-center justify-center space-x-1" style="color: #E2B08A;">
                            ${generateStarRating(product.rating, 'w-5 h-5')}
                            <span class="text-sm text-gray-500">${product.rating}</span>
                        </div>
                        <button class="mt-4 w-full bg-[#003366] text-white border-2 border-[#003366] rounded-full px-10 py-2 text-lg cursor-pointer hover:bg-blue-700 transition" id="viewDetailsBtn-${product.id}">View Details</button>
                    </div>
                `;
                shopDOM.shopProductGrid.appendChild(productCard);

                // Add click event listener to the View Details button
                const viewDetailsBtn = document.getElementById(`viewDetailsBtn-${product.id}`);
                if (viewDetailsBtn) {
                    viewDetailsBtn.addEventListener('click', (event) => {
                        event.stopPropagation(); // Prevent the card click from firing twice
                        window.location.href = `product_detail.html?id=${product.id}`;
                    });
                }
            }
            
            // Update product count display
            shopDOM.shopProductCount.textContent = `Showing ${startIdx + 1}-${endIdx} of ${filteredProducts.length} products`;

            // Update pagination
            updateShopPagination(filteredProducts.length);
        }

        function toggleWishlistFromShop(productId) {
            const product = allProducts.find(p => p.id === productId);
            if (!product) return;

            const index = wishlist.findIndex(item => item.id === product.id);
            
            if (index === -1) {
                wishlist.push(product);
                showToast('Added to wishlist');
            } else {
                wishlist.splice(index, 1);
                showToast('Removed from wishlist');
            }
            // In a real app, you'd also update the heart icon on the card
        }

        function updateShopPagination(totalProducts) {
            const totalPages = Math.ceil(totalProducts / pageSize);
            shopDOM.shopPagination.innerHTML = '';
            
            // Previous button
            const prevBtn = document.createElement('button');
            prevBtn.className = 'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50';
            prevBtn.innerHTML = '<span class="sr-only">Previous</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>';
            prevBtn.onclick = () => gotoShopPage(Math.max(1, currentPage - 1));
            prevBtn.disabled = currentPage === 1;
            shopDOM.shopPagination.appendChild(prevBtn);
            
            // Page buttons
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${i === currentPage ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`;
                pageBtn.textContent = i;
                pageBtn.onclick = () => gotoShopPage(i);
                shopDOM.shopPagination.appendChild(pageBtn);
            }
            
            // Next button
            const nextBtn = document.createElement('button');
            nextBtn.className = 'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50';
            nextBtn.innerHTML = '<span class="sr-only">Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>';
            nextBtn.onclick = () => gotoShopPage(Math.min(totalPages, currentPage + 1));
            nextBtn.disabled = currentPage >= totalPages;
            shopDOM.shopPagination.appendChild(nextBtn);
        }

        function gotoShopPage(page) {
            currentPage = page;
            renderShopProducts();
        }

        function filterShopProducts(filterType, value) {
            if (filterType === 'mainCategory') {
                currentFilters.mainCategory = value;
            } else if (filterType === 'category') {
                currentFilters.category = value;
            } else if (filterType === 'color') {
                currentFilters.color = value;
            }
            applyShopFilters();
        }

        function updatePriceRangeDisplay(value) {
            shopDOM.shopMaxPrice.value = value;
        }

        function applyShopFilters() {
            currentFilters.minPrice = parseInt(shopDOM.shopMinPrice.value) || 0;
            currentFilters.maxPrice = parseInt(shopDOM.shopMaxPrice.value) || 5000;
            currentFilters.sortBy = shopDOM.shopSortSelect.value;

            filteredProducts = allProducts.filter(product => {
                const matchesMainCategory = currentFilters.mainCategory === 'All' || product.mainCategory === currentFilters.mainCategory;
                const matchesCategory = currentFilters.category === 'All' || product.category === currentFilters.category;
                const matchesPrice = product.price >= currentFilters.minPrice && product.price <= currentFilters.maxPrice;
                const matchesColor = currentFilters.color === 'All' || product.colors.some(c => c.code.toLowerCase() === currentFilters.color.toLowerCase());
                return matchesMainCategory && matchesCategory && matchesPrice && matchesColor;
            });

            sortShopProducts(currentFilters.sortBy);
            currentPage = 1;
            renderShopProducts();
        }

        function sortShopProducts(sortBy) {
            currentFilters.sortBy = sortBy;

            filteredProducts.sort((a, b) => {
                if (sortBy === 'price-asc') {
                    return a.price - b.price;
                } else if (sortBy === 'price-desc') {
                    return b.price - a.price;
                } else if (sortBy === 'popularity') {
                    return b.rating - a.rating;
                } else if (sortBy === 'relevance') {
                    return 0;
                }
                return 0;
            });
            renderShopProducts();
        }

        // Override showPage for shop.html to handle navigation to product_detail.html
        function showPage(pageId, productId = null) {
            if (pageId === 'shop') {
                document.body.classList.add('listing-page');
                // No need to hide/show sections as this is the only section in shop.html
                // Just re-render products if needed
                renderShopProducts();
            } else if (pageId === 'product-detail' && productId) {
                window.location.href = `product_detail.html?id=${productId}`;
            }
            // Close mobile menu if open
            document.getElementById('mobileMenu').classList.add('hidden');
            // Scroll to top
            window.scrollTo(0, 0);
        }
    