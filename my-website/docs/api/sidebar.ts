import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/postman-library-api-v-2",
    },
    {
      type: "category",
      label: "Endpoints",
      items: [
        {
          type: "doc",
          id: "api/get-fiction-books",
          label: "get fiction books",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/add-books",
          label: "add books",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-books-by-id",
          label: "get books by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/checkout-book",
          label: "checkout book",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/delete-book",
          label: "Delete book",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
