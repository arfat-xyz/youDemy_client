import React from "react";
import { Badge, Card } from "antd";
import Link from "next/link";
import { currencyFormatter } from "../../utils/helpers";
const { Meta } = Card;
const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;

  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className=" shadow-md rounded  mb-4"
          cover={
            <img
              src={image.Location}
              alt={name}
              className="rounded"
              style={{ height: 200, objectFit: "cover" }}
            />
          }
        >
          <h2 className="font-weight-bold">{name}</h2>
          <p>by {instructor.name}</p>
          <Badge count={category} className="pb-2 me-2" />
          <h4 className="pt-2">
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: "usd",
                })
              : "free"}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
