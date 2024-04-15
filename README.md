In this project, let's build a **Reviews App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif" alt="reviews app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the left arrow is clicked, then the previous review details should be displayed
- When the right arrow is clicked, then the next review details should be displayed
- If the review that is being displayed is the first in the list of reviews
  - There should not be any state change when the left arrow is clicked
- If the review that is being displayed is the last in the list of reviews
  - There should not be any state change when the right arrow is clicked
- The `ReviewsCarousel` component receives the `reviewsList` as a prop. It consists of a list of review objects with the following properties in each review object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |   imgUrl    |  String   |
  |  username   |  String   |
  | companyName |  String   |
  | description |  String   |

</details>

<details>
<summary>Implementation</summary>
<br/>

Use these files to complete the implementation:

- `src/components/ReviewsCarousel/index.js`
- `src/components/ReviewsCarousel/index.css`
</details>

### Quick Tips

<details>
<summary>Click to view</summary>
<br>

- You can use the `cursor` CSS property to specify the mouse cursor to be displayed when pointing over an element

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below `outline` CSS property for buttons and input elements to remove the highlighting when the elements are clicked

  ```
    outline: none;
  ```

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/reviews-bg.png](https://assets.ccbp.in/frontend/react-js/reviews-bg.png)
- [https://assets.ccbp.in/frontend/react-js/left-arrow-img.png](https://assets.ccbp.in/frontend/react-js/left-arrow-img.png) alt should be **left arrow**
- [https://assets.ccbp.in/frontend/react-js/right-arrow-img.png](https://assets.ccbp.in/frontend/react-js/right-arrow-img.png) alt should be **right arrow**

</details>




