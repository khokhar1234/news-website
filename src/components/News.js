import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import Spiner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "generl",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Hello i am a constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - ARY-News `;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&country=${this.props.country}&category=${this.props.category}&apiKey=2e60e4d892af4efb934491a8bc51aae7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
   
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
    fetchMoreData = async () => {
      this.setState({ page: this.state.page + 1 })
      
      const url = `https://newsapi.org/v2/top-headlines?country=us&country=${this.props.country}&category=${this.props.category}&apiKey=2e60e4d892af4efb934491a8bc51aae7&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalarticles: parsedData.totalResults,
        // loading: false,
      });
    
    
    }
  render() {
    return (
      <>
        <h2 className="text-center">
          ARY - Top {this.capitalizeFirstLetter(this.props.category)} Headlines{" "}
        </h2>
        {this.state.loading && <Spiner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
         
    </>
    );
  }
}

export default News;
