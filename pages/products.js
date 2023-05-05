import { useEffect, useState } from "react";
import Layout from "../components/layout";
import DataTable from "react-data-table-component";

const Product = ({ products }) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    setAllProducts(products);
  }, []);
  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Photos",
      cell: (row) => (
        <img
          style={{ width: "150px", padding: "3px 0 3px 0" }}
          src={row.thumbnail}
          alt={row.title}
        />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            onClick={() =>
              alert("Sorry, edit function is not implemented yet!")
            }
            className="btn btn-primary me-2"
          >
            Edit
          </button>
          <button
            onClick={() =>
              alert("Sorry, delete function is not implemented yet!")
            }
            className="btn btn-danger"
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  function handleFilter(event) {
    const newData = products.filter((row) => {
      return row.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setAllProducts(newData);
  }
  return (
    <>
      <Layout>
        <div className="container pt-4 pb-5">
          <h3 className="pb-2">Product Collection - Table</h3>

          <DataTable
            columns={columns}
            data={allProducts}
            fixedHeader
            highlightOnHover
            title="Product listing"
            pagination
            actions={
              <div className="text-end">
                <input
                  type="text"
                  className="rounded border-1"
                  style={{
                    padding: "3px 10px",
                    width: "300px",
                    fontSize: "15px",
                  }}
                  placeholder="Find products here"
                  onChange={handleFilter}
                ></input>
              </div>
            }
          ></DataTable>
        </div>
      </Layout>
    </>
  );
};
export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const resp = await res.json();
  return {
    props: {
      products: resp.products,
    },
  };
}

export default Product;
