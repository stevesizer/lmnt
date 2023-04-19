import { gql } from 'graphql-request';

export const PRODUCT_QUERY = gql`
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      media(first: 8) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      variants(first: 8) {
        nodes {
          id
          image {
            url
            altText
            width
            height
          }
          title
          selectedOptions {
            name
            value
          }
        }
      }
      tags
      options {
        name
        values
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query Products {
    products(first: 10) {
      nodes {
        id
        handle
        description
        title
        featuredImage {
          altText
          url
        }
        variants(first: 1) {
          nodes {
            id
            image {
              url
              altText
              width
              height
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        tags
      }
    }
  }
`;

export const WRONG_PRODUCT_QUERY = gql`
  query product45($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      media(first: 8) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      variants(first: 8) {
        nodes {
          id
          image {
            url
            altText
            width
            height
          }
          title
          selectedOptions {
            name
            value
          }
        }
      }
      tags
      options {
        name
        values
      }
    }
  }
`;
