// Sample product data for allProducts array
const allProducts = [
    {
        id: 'wb-azr-drss',
        name: 'Azure Dream Maxi Dress',
        price: 4999,
        currency: '₹',
        description: 'Inspired by azure skies and endless possibilities...',
        fabric: 'Eco-viscose',
        highlights: [
            'Premium Eco-Viscose Fabric',
            'Adjustable Straps for Custom Fit',
            'Flowing A-Line Silhouette',
            'Breathable and Lightweight',
            'Perfect for Any Special Occasion'
        ],
        colors: [
            { name: 'Red', code: '#ff0000', image: '../project_images/dress.jpg' },
            { name: 'Blue', code: '#0000ff', image: '../project_images/denim_jacket.jpg' },
            { name: 'Green', code: '#00ff00', image: '../project_images/Skirt.jpg' },
            { name: 'Yellow', code: '#ffff00', image: '../project_images/foot.jpg' }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.2,
        reviewCount: 42,
        reviews: [
            {
                customerName: 'Priya.S',
                rating: 5,
                date: '2 weeks ago',
                text: 'Perfect fit and so comfortable! The fabric is soft and breathable, and the fit is just perfect.',
                helpful: 10,
                avatar: ''
            },
            {
                customerName: 'Ananya.K',
                rating: 4,
                date: '1 month ago',
                text: 'Beautiful dress! Excellent quality. Just a little large, recommend sizing down.',
                helpful: 5,
                avatar: ''
            },
            {
                customerName: 'Riya.M',
                rating: 5,
                date: '2 months ago',
                text: 'Exceeded expectations! I got many compliments when wearing it. Will definitely buy again!',
                helpful: 8,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'seasonal-summer-dress',
                name: 'Casual Summer Dress',
                image: '../project_images/hoodie.jpg'
            },
            {
                id: 'wb-denim-jkt',
                name: 'Trendy Jacket Set',
                image: '../project_images/denim_jacket.jpg'
            },
            {
                id: 'wb-flrl-drss',
                name: 'Floral Red Dress',
                image: '../project_images/dress.jpg'
            },
            {
                id: 'wb-maxi-skirt',
                name: 'Skirt',
                image: '../project_images/Skirt.jpg'
            }
        ]
    },
    {
        id: 'wb-casual-frock',
        name: 'Casual Summer Frock',
        price: 2999,
        currency: '₹',
        description: 'Lightweight and breezy frock perfect for casual outings and summer days.',
        fabric: 'Cotton Blend',
        highlights: [
            'Soft and Breathable Fabric',
            'Relaxed Fit for Comfort',
            'Vibrant Summer Colors',
            'Machine Washable',
            'Ideal for Daytime Wear'
        ],
        colors: [
            { name: 'Coral', code: '#ff7f50', image: '../project_images/casual frock.jpg' },
            { name: 'Sky Blue', code: '#87ceeb', image: '../project_images/summer.jpg' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.0,
        reviewCount: 30,
        reviews: [
            {
                customerName: 'Neha.P',
                rating: 4,
                date: '3 weeks ago',
                text: 'Very comfortable and stylish. Perfect for summer!',
                helpful: 7,
                avatar: ''
            },
            {
                customerName: 'Rohit.K',
                rating: 4,
                date: '1 month ago',
                text: 'Good quality fabric and fit.',
                helpful: 3,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-azr-drss',
                name: 'Azure Dream Maxi Dress',
                image: '../project_images/dress.jpg'
            },
            {
                id: 'wb-flrl-drss',
                name: 'Floral Red Dress',
                image: '../project_images/dress.jpg'
            }
        ]
    },
    {
        id: 'wb-denim-jkt',
        name: 'Denim Jacket',
        price: 3999,
        currency: '₹',
        description: 'Classic denim jacket with a modern fit, perfect for layering.',
        fabric: 'Denim',
        highlights: [
            'Durable Denim Material',
            'Button Closure',
            'Multiple Pockets',
            'Versatile Style',
            'Machine Washable'
        ],
        colors: [
            { name: 'Blue', code: '#0000ff', image: '../project_images/denim_jacket.jpg' },
            { name: 'Black', code: '#000000', image: '../project_images/outer.jpg' }
        ],
        sizes: ['M', 'L', 'XL'],
        rating: 4.5,
        reviewCount: 50,
        reviews: [
            {
                customerName: 'Amit.S',
                rating: 5,
                date: '1 week ago',
                text: 'Fits perfectly and looks great!',
                helpful: 12,
                avatar: ''
            },
            {
                customerName: 'Sneha.R',
                rating: 4,
                date: '2 weeks ago',
                text: 'Good quality denim jacket.',
                helpful: 6,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-azr-drss',
                name: 'Azure Dream Maxi Dress',
                image: '../project_images/dress.jpg'
            },
            {
                id: 'wb-casual-frock',
                name: 'Casual Summer Frock',
                image: '../project_images/casual frock.jpg'
            }
        ]
    },
    {
        id: 'wb-flrl-drss',
        name: 'Floral Red Dress',
        price: 4599,
        currency: '₹',
        description: 'Elegant floral dress with a flattering silhouette and vibrant colors.',
        fabric: 'Silk Blend',
        highlights: [
            'Smooth Silk Blend Fabric',
            'Floral Print Design',
            'Comfortable Fit',
            'Lightweight and Breathable',
            'Perfect for Special Occasions'
        ],
        colors: [
            { name: 'Red', code: '#ff0000', image: '../project_images/floral dress.jpg' },
            { name: 'Pink', code: '#ffc0cb', image: '../project_images/floral.jpg' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        rating: 4.3,
        reviewCount: 38,
        reviews: [
            {
                customerName: 'Kavya.M',
                rating: 5,
                date: '2 weeks ago',
                text: 'Beautiful dress, very comfortable and stylish.',
                helpful: 9,
                avatar: ''
            },
            {
                customerName: 'Rahul.D',
                rating: 4,
                date: '1 month ago',
                text: 'Lovely fabric and fit, received many compliments.',
                helpful: 4,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-azr-drss',
                name: 'Azure Dream Maxi Dress',
                image: '../project_images/dress.jpg'
            },
            {
                id: 'wb-casual-frock',
                name: 'Casual Summer Frock',
                image: '../project_images/casual frock.jpg'
            }
        ]
    },
    {
        id: 'wb-braidmaid-gown',
        name: 'Elegant Bridesmaid Gown',
        price: 5999,
        currency: '₹',
        description: 'A stunning gown perfect for bridesmaids, featuring delicate lace and a flowing skirt.',
        fabric: 'Lace and Satin',
        highlights: [
            'Delicate Lace Detailing',
            'Flowing Satin Skirt',
            'Adjustable Waistband',
            'Available in Multiple Colors',
            'Ideal for Weddings and Formal Events'
        ],
        colors: [
            { name: 'Lavender', code: '#E6E6FA', image: '../project_images/braidmaid.jpg' },
            { name: 'Blush Pink', code: '#FFC0CB', image: '../project_images/ruffled.jpg' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.6,
        reviewCount: 25,
        reviews: [
            {
                customerName: 'Anjali.R',
                rating: 5,
                date: '1 week ago',
                text: 'Beautiful gown, perfect fit and very comfortable.',
                helpful: 6,
                avatar: ''
            },
            {
                customerName: 'Sonia.K',
                rating: 4,
                date: '3 weeks ago',
                text: 'Lovely fabric and design, received many compliments.',
                helpful: 3,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-azr-drss',
                name: 'Azure Dream Maxi Dress',
                image: '../project_images/dress.jpg'
            },
            {
                id: 'wb-flrl-drss',
                name: 'Floral Red Dress',
                image: '../project_images/floral dress.jpg'
            }
        ]
    },
    {
        id: 'wb-cargo-pants',
        name: 'Cargo Pants',
        price: 2599,
        currency: '₹',
        description: 'Comfortable and durable cargo pants with multiple pockets for utility and style.',
        fabric: 'Cotton Twill',
        highlights: [
            'Multiple Utility Pockets',
            'Adjustable Waistband',
            'Durable Cotton Twill Fabric',
            'Machine Washable',
            'Casual and Functional'
        ],
        colors: [
            { name: 'Olive Green', code: '#556B2F', image: '../project_images/cargo_pants.jpg' },
            { name: 'Khaki', code: '#F0E68C', image: '../project_images/shorts.jpg' }
        ],
        sizes: ['M', 'L', 'XL', 'XXL'],
        rating: 4.1,
        reviewCount: 18,
        reviews: [
            {
                customerName: 'Vikram.S',
                rating: 4,
                date: '2 weeks ago',
                text: 'Very comfortable and practical pants.',
                helpful: 4,
                avatar: ''
            },
            {
                customerName: 'Rina.T',
                rating: 4,
                date: '1 month ago',
                text: 'Good quality fabric and fit.',
                helpful: 2,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-denim-jkt',
                name: 'Denim Jacket',
                image: '../project_images/denim_jacket.jpg'
            },
            {
                id: 'wb-casual-frock',
                name: 'Casual Summer Frock',
                image: '../project_images/casual frock.jpg'
            }
        ]
    },
    {
        id: 'wb-bow-accessory',
        name: 'Stylish Bow Accessory',
        price: 499,
        currency: '₹',
        description: 'A chic bow accessory to complement your outfit, available in various colors.',
        fabric: 'Polyester',
        highlights: [
            'Lightweight and Durable',
            'Available in Multiple Colors',
            'Easy to Attach',
            'Perfect for Hair or Clothing',
            'Fashionable and Trendy'
        ],
        colors: [
            { name: 'Red', code: '#ff0000', image: '../project_images/bow.jpg' },
            { name: 'Black', code: '#000000', image: '../project_images/hairband.jpg' }
        ],
        sizes: ['One Size'],
        rating: 4.4,
        reviewCount: 12,
        reviews: [
            {
                customerName: 'Meera.P',
                rating: 5,
                date: '1 week ago',
                text: 'Lovely accessory, adds a nice touch to my outfits.',
                helpful: 5,
                avatar: ''
            },
            {
                customerName: 'Nina.S',
                rating: 4,
                date: '2 weeks ago',
                text: 'Good quality and easy to use.',
                helpful: 3,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-flrl-drss',
                name: 'Floral Red Dress',
                image: '../project_images/floral dress.jpg'
            },
            {
                id: 'wb-braidmaid-gown',
                name: 'Elegant Bridesmaid Gown',
                image: '../project_images/braidmaid.jpg'
            }
        ]
    },
    {
        id: 'wb-hoodie',
        name: 'Cozy Hoodie',
        price: 3499,
        currency: '₹',
        description: 'Warm and comfortable hoodie perfect for casual wear and chilly days.',
        fabric: 'Fleece',
        highlights: [
            'Soft Fleece Material',
            'Adjustable Drawstring Hood',
            'Front Pocket',
            'Machine Washable',
            'Available in Multiple Colors'
        ],
        colors: [
            { name: 'Gray', code: '#808080', image: '../project_images/hoodie.jpg' },
            { name: 'Navy Blue', code: '#000080', image: 'project_images/outer.jpg' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        rating: 4.7,
        reviewCount: 60,
        reviews: [
            {
                customerName: 'Arjun.K',
                rating: 5,
                date: '3 days ago',
                text: 'Very warm and cozy hoodie, great for winter.',
                helpful: 15,
                avatar: ''
            },
            {
                customerName: 'Simran.L',
                rating: 4,
                date: '1 week ago',
                text: 'Comfortable and stylish.',
                helpful: 7,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-denim-jkt',
                name: 'Denim Jacket',
                image: '../project_images/denim_jacket.jpg'
            },
            {
                id: 'wb-casual-frock',
                name: 'Casual Summer Frock',
                image: '../project_images/casual frock.jpg'
            }
        ]
    },
    {
        id: 'wb-pleated-skirt',
        name: 'Pleated Skirt',
        price: 2799,
        currency: '₹',
        description: 'Elegant pleated skirt with a comfortable fit and stylish design.',
        fabric: 'Polyester Blend',
        highlights: [
            'Lightweight and Flowing',
            'Comfortable Waistband',
            'Machine Washable',
            'Available in Multiple Colors',
            'Perfect for Casual or Formal Wear'
        ],
        colors: [
            { name: 'Black', code: '#000000', image: '../project_images/pleated_skirt.jpg' },
            { name: 'Navy', code: '#000080', image: '../project_images/ruffled.jpg' }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        rating: 4.2,
        reviewCount: 22,
        reviews: [
            {
                customerName: 'Pooja.S',
                rating: 4,
                date: '2 weeks ago',
                text: 'Nice skirt, very comfortable and stylish.',
                helpful: 6,
                avatar: ''
            },
            {
                customerName: 'Karan.M',
                rating: 4,
                date: '1 month ago',
                text: 'Good quality fabric and fit.',
                helpful: 3,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-flrl-drss',
                name: 'Floral Red Dress',
                image: '../project_images/floral dress.jpg'
            },
            {
                id: 'wb-azr-drss',
                name: 'Azure Dream Maxi Dress',
                image: '../project_images/dress.jpg'
            }
        ]
    },
    {
        id: 'wb-sneakers',
        name: 'Casual Sneakers',
        price: 3499,
        currency: '₹',
        description: 'Comfortable and stylish sneakers suitable for everyday wear.',
        fabric: 'Canvas',
        highlights: [
            'Breathable Canvas Material',
            'Rubber Sole',
            'Available in Multiple Colors',
            'Lightweight and Durable',
            'Perfect for Casual Outings'
        ],
        colors: [
            { name: 'White', code: '#ffffff', image: '../project_images/sneakers.jpg' },
            { name: 'Black', code: '#000000', image: '../project_images/footwear.jpg' }
        ],
        sizes: ['6', '7', '8', '9', '10'],
        rating: 4.5,
        reviewCount: 40,
        reviews: [
            {
                customerName: 'Rahul.P',
                rating: 5,
                date: '1 week ago',
                text: 'Very comfortable sneakers, great for daily wear.',
                helpful: 10,
                avatar: ''
            },
            {
                customerName: 'Anita.S',
                rating: 4,
                date: '2 weeks ago',
                text: 'Good quality and stylish design.',
                helpful: 5,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-hoodie',
                name: 'Cozy Hoodie',
                image: '../project_images/hoodie.jpg'
            },
            {
                id: 'wb-denim-jkt',
                name: 'Denim Jacket',
                image: '../project_images/denim_jacket.jpg'
            }
        ]
    },
    {
        id: 'wb-velvet-dress',
        name: 'Velvet Evening Dress',
        price: 6999,
        currency: '₹',
        description: 'Luxurious velvet dress perfect for evening events and parties.',
        fabric: 'Velvet',
        highlights: [
            'Soft Velvet Material',
            'Elegant Silhouette',
            'Comfortable Fit',
            'Machine Washable',
            'Available in Rich Colors'
        ],
        colors: [
            { name: 'Deep Red', code: '#8B0000', image: '../project_images/velvet.jpg' },
            { name: 'Black', code: '#000000', image: '../project_images/party gown.jpg' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        rating: 4.8,
        reviewCount: 55,
        reviews: [
            {
                customerName: 'Nisha.T',
                rating: 5,
                date: '4 days ago',
                text: 'Absolutely stunning dress, very comfortable and elegant.',
                helpful: 14,
                avatar: ''
            },
            {
                customerName: 'Kiran.P',
                rating: 4,
                date: '1 week ago',
                text: 'Great quality and fit.',
                helpful: 6,
                avatar: ''
            }
        ],
        recommendations: [
            {
                id: 'wb-flrl-drss',
                name: 'Floral Red Dress',
                image: '../project_images/floral dress.jpg'
            },
            {
                id: 'wb-azr-drss',
                name: 'Azure Dream Maxi Dress',
                image: '../project_images/dress.jpg'
            }
        ]
    }
];

// Wishlist and cart arrays
const wishlist = [];
const cart = [];

// Utility function to update cart count in UI
function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');
    if (!cartCountEl) return;
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalQuantity;
}

// Utility function to show toast notifications
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    const toastContent = toast.querySelector('.toast-content');
    toastContent.textContent = message;
    toast.style.display = 'block';
    toast.style.backgroundColor = type === 'error' ? '#dc2626' : (type === 'success' ? '#16a34a' : '#13294B');
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Utility functions to show and hide modals by id
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to generate star rating HTML based on rating value
function generateStarRating(rating, className = '') {
    const fullStar = '<svg class="' + className + '" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"/></svg>';
    const halfStar = '<svg class="' + className + '" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 15l-3.09 1.62.59-3.44L5 11.18l3.45-.5L10 7l1.55 3.68 3.45.5-2.5 2.5.59 3.44L10 15z"/></svg>';
    const emptyStar = '<svg class="' + className + '" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            starsHTML += fullStar;
        } else if (rating >= i - 0.5) {
            starsHTML += halfStar;
        } else {
            starsHTML += emptyStar;
        }
    }
    return starsHTML;
}
