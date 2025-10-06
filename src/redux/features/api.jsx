import { baseApi } from './base-api';

export const Api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTypeProducts: builder.query({
      query: () => ({
        url: '/type-products',
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getProducts: builder.query({
      query: (page) => ({
        url: `/all-products?page=${page}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getCategoryWiseProducts: builder.query({
      query: (slug) => ({
        url: `/filter-category-products/${slug}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getSubcategoryWiseProducts: builder.query({
      query: (slug) => ({
        url: `/filter-subcategory-products/${slug}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),
    getProductsSearchByName: builder.query({
      query: (slug) => `/product-search/${slug}`,
      providesTags: ['products'],
    }),
    getSpecificProduct: builder.query({
      query: (slug) => `/product/details/${slug}`,
      providesTags: ['products'],
    }),
    getCategories: builder.query({
      query: () => `/categories`,
      providesTags: ['categories'],
    }),
    CountCarts: builder.query({
      query: (ip) => `/cart-products-count/${ip}`,
      providesTags: ['carts'],
    }),
    getCartsProducts: builder.query({
      query: (ip) => `/get-cart-products/${ip}`,
      providesTags: ['carts'],
    }),
    generalData: builder.query({
      query: () => '/general-data',
    }),
    getSliders: builder.query({
      query: () => '/home-sliders',
    }),
    getAbout: builder.query({
      query: () => '/about-us',
    }),
    privacyPolicy: builder.query({
      query: () => '/privacy-policy',
    }),
    termsCondition: builder.query({
      query: () => '/terms-conditions',
    }),
    refundPolicy: builder.query({
      query: () => '/refund-policy',
    }),
    paymentPolicy: builder.query({
      query: () => '/payment-policy',
    }),
    getOrder: builder.query({
      query: (orderId) => `/order-details/${orderId}`,
      providesTags: ['orders'],
    }),
    // mutation
    contactForm: builder.mutation({
      query: (data) => ({
        url: '/contact-store',
        method: 'POST',
        body: data,
      }),
    }),
    addToCart: builder.mutation({
      query: ({ data, id }) => ({
        url: `/product/add-to-cart/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['carts'],
    }),
    placeOrder: builder.mutation({
      query: (data) => ({
        url: '/confirm-order',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['carts', 'orders'],
    }),
    updateCartQty: builder.mutation({
      query: ({ id, qty }) => ({
        url: `/cart/${id}`,
        method: 'PUT',
        body: { qty },
      }),
      invalidatesTags: ['carts'],
    }),
    deleteCart: builder.mutation({
      query: (id) => `/delete-cart/${id}`,
      invalidatesTags: ['carts'],
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {
  useGetTypeProductsQuery,
  useGetProductsQuery,
  useGetSlidersQuery,
  useGeneralDataQuery,
  useGetCartsProductsQuery,
  useGetCategoriesQuery,
  useGetCategoryWiseProductsQuery,
  useCountCartsQuery,
  useGetProductsSearchByNameQuery,
  useGetSpecificProductQuery,
  useAddToCartMutation,
  useContactFormMutation,
  usePlaceOrderMutation,
  useDeleteCartMutation,
  useGetAboutQuery,
  useGetSubcategoryWiseProductsQuery,
  usePaymentPolicyQuery,
  usePrivacyPolicyQuery,
  useRefundPolicyQuery,
  useTermsConditionQuery,
  useGetOrderQuery,
  useUpdateCartQtyMutation,
} = Api;
