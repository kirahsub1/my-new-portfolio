import Card from "../Cards/Card";
import "./Service.css";

const Service = () => {
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
          color="render-one"
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
          color="render-two"
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
        <Card
          image="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1730801899/kuda_cir21s.png"
          title="Kuda Clone App"
          description="The Kuda Clone App is a mobile banking
           application designed to replicate the seamless and
            user-friendly banking experience of Kuda Bank. This
             app offers essential features such as opening a bank
              account without paperwork, free transfers to other 
              bank accounts, instant notifications for transactions,
               and tools to track and manage spending. Users can also 
               benefit from features like automated savings plans, the 
               ability to create multiple savings goals, and in-app bill
                payments. With a focus on security and convenience, the
                 app uses advanced encryption methods and biometric login
                  options to protect user information."
          link="https://kuda-clone-app-phi.vercel.app/"
          source="https://github.com/kirahsub1/kuda-clone-app"
        />
      </div>
    </div>
  );
};

export default Service;
