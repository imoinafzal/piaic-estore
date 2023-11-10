import refreshData from "./action";

export async function allProductFetcherFromSanity() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++++producttype%2c_id%0A%7D`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function maleProductFethcerFromSanity() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+producttype+%3D%3D+%22male%22%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++++producttype%2c_id%0A%7D`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function femaleProductFethcerFromSanity() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+producttype+%3D%3D+%22female%22%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++producttype%2c_id%0A%7D`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function kidsProductFethcerFromSanity() {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+producttype+%3D%3D+%22kids%22%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++producttype%2c_id%0A%7D`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function searchProductFethcerFromSanity(search: string) {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+productname+match+%22${search}%22%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++producttype%2c_id%0A%7D`
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function singleProductDetailPageFromSanity(search: string) {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${search}%22+%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++producttype%2c_id%0A%7D`
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function getAllCartProductsByUserId(userId: string) {
  const res = await fetch(
    `https://piaic-estore.vercel.app/api/cartFun?userid=${userId}`
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function productFromIdCart(productId: string) {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-10-23/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+_id+%3D%3D+%27${productId}%27%5D+%7B%0A++image%2C%0A++productname%2C%0A++quantity%2C%0A++price%2C%0A++slug%2C%0A++description%2C%0A++size%2C%0A++producttype%2C%0A++++_id%0A%7D`
  );
  if (!res.ok) {
    return "Error";
  }
  return res.json();
}

export async function addToCartApiCall(userid: string, productid: string) {
  const res = await fetch("https://piaic-estore.vercel.app/api/cartFun", {
    mode: "no-cors",
    method: "POST",
    body: JSON.stringify({
      userid: userid,
      productid: productid,
      quantity: 1,
    }),
  });
  return "OK";
}

export async function updateCartItems(
  userid: string,
  productid: string,
  quantity: number
) {
  const url = `https://piaic-estore.vercel.app/api/cartFun`;

  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      userid: userid,
      productid: productid,
      quantity: quantity,
    }),
  });

  if (!res.ok) {
    return "Error";
  }
  await refreshData();
  return "OK";
}
export async function handleDelete(userId: string, productId: string) {
  const url = `https://piaic-estore.vercel.app/api/cartFun?userid=${userId}&productid=${productId}`;

  const res = await fetch(url, {
    method: "DELETE",
  });

  await refreshData();
}
