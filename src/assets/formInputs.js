export const inputFields = [
  {
    label: "title",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Learn JavaScript",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    required: true,
    placeholder: "Learn JavaScript",
  },
  {
    label: "Thumbnail",
    name: "thumbnail",
    type: "url",
    required: true,
    placeholder: "Learn JavaScript",
  },
  {
    label: "ISBN",
    name: "isbn",
    type: "text",
    required: true,
    placeholder: "2345678guy",
  },
  {
    label: " Published Year",
    name: "publishedyear",
    type: "number",
    min: "1000",
    required: true,
    placeholder: "2020",
  },

  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
    maxLength: "5000",
    required: true,
    placeholder: "Book summary ...........",
    rows: "5",
  },
];
