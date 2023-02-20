import React from "react";

class Search extends React.Component {
    constructor() {
        super();
    }

    state = {
        search: "",
        type: 'all',
    };

    handleKey = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovie(this.state.search);
        }
    };

    handleChange = (event) => {
        this.props.searchMovie(this.state.search, event.target.value);
    };

    render() {
        return (
            <div className="row">
                <div className="input-field ">
                    <input
                        placeholder="search"
                        type="search"
                        id="email_inline"
                        className="validate"
                        value={this.state.search}
                        onChange={(event) => {
                            this.setState({ search: event.target.value });
                        }}
                        onKeyDown={this.handleKey}
                    />
                </div>
                <div>
                    <button
                        onClick={(event) => {
                            this.props.searchMovie(this.state.search);
                        }}
                    >
                        Find
                    </button>
                </div>
                <form action="#">
                    <p>
                        <label>
                            <input
                                name="filterFilms"
                                type="radio"
                                value="all"
                                onChange={this.handleChange}
                                //checked={this.state.type === 'all'}
                            />
                            <span>all</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name="filterFilms"
                                type="radio"
                                value="movie"
                                onChange={this.handleChange}
                               // checked={this.state.type === 'movie'}
                            />
                            <span>films</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name="filterFilms"
                                type="radio"
                                value="series"
                                onChange={this.handleChange}
                                //checked={this.state.type === 'series'}
                            />
                            <span>Serials</span>
                        </label>
                    </p>
                </form>
            </div>
        );
    }
}

export { Search };
