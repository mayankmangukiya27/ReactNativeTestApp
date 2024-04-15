import { data } from "../mock";

export function fetchNextPageData(currentIndex : number, searchText : string) {

    const slicedData = data[currentIndex]
    const finalData = currentIndex <= 2 ? slicedData.page["content-items"].content : [];
    if(searchText.length > 0){
        return finalData.filter((ele) => ele.name.includes(searchText));
    }
    return finalData;
}