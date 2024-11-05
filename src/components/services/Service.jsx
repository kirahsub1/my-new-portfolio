import Card from "../../components/Cards/Card"
import "./Service.css"

const service = () => {
  return (
    <div className="service-container">
      <h1>Projects</h1>
      <p>Here are some of my projects:</p>
      <div className="Cards-container">
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730582940/cool_i1cewm.png"
          title="Coolors Clone Sail Project"
          description="This web project replicates the Coolors color palette generator, allowing users
           to explore and create harmonious color schemes. Built as part of my full stack development training at 
           Sail Innovation Lab, it features functionalities like generating random palettes, locking colors 
           to maintain consistency, and copying color codes for easy design use. This project showcases skills 
           in JavaScript, HTML, and CSS, focusing on user-friendly and visually engaging design."
          link="https://coolors-project-ten.vercel.app/"
          source="https://github.com/kirahsub1/coolors-project"
        />
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730796392/active-states_nyxrvt.jpg"
          title="Dessert App with Add to Cart"
          description="The Dessert App is an e-commerce platform for dessert lovers,
           offering a wide range of delectable treats for purchase. Users can browse
            through categories like cakes, pastries, cookies, and specialty desserts,
             with detailed descriptions and high-quality images. The app features an
              Add to Cart functionality, allowing users to select their desired
               desserts and proceed to a secure checkout for a seamless purchasing
                experience. Additional features include a search and filter system,
                 user reviews, and personalized recommendations based on browsing
                  history. The app aims to deliver a delightful user experience with 
                  a responsive design and efficient shopping workflow."
          link="https://sail-dessert-project.vercel.app/"
          source="https://github.com/kirahsub1/sail-dessert-project"
        />
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730798029/furniro_vexde6.png"
          title="Furniro App"
          description="Furniro is a modern furniture shopping app designed 
          to provide users with an easy and enjoyable way to browse and purchase 
          high-quality furniture for their homes or offices. The app features an
           extensive catalog of furniture, including sofas, tables, chairs, and
            storage solutions, with options to filter by style, material, price
             range, and room type. Users can view detailed product information,
              including dimensions, customer reviews, and 360-degree images. With
               the Add to Cart and secure checkout features, Furniro makes
                furniture shopping simple and efficient. The app also includes
                 an augmented reality (AR) function, allowing users to visualize
                  how furniture pieces will look in their space before buying."
          link="https://furniro-sail-project.vercel.app/"
          source="https://github.com/kirahsub1/furniro-sail-project"
        />
        <Card image="" title="" description="" link="" />
      </div>
    </div>
  );
}

export default service