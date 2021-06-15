## Redux
1. Không nên kết nối redux ở App, vì khi kết nối ở app sẽ dễ dẫn đến trường hợp nó bị render nhiều component.
2. Trong thực tế, thường chỉ kết nối vào trong những component xử lí logic trong redux.
3. Reducer chỉ xử lí việc update state, chứ không xử lí logic.
4. Thường sẽ xử khai báo useSelector theo từng cái state riêng biệt.