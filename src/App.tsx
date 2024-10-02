import data from './colors.json';

// create a type to define the shape of the complementary colors property in a colors.json element
type CompColor = {
    hex: string;
    name: string;
};

// create a type to define the shape of the elements from colors.json
type ColorJSON = {
    hex: string;
    name: string;
    comp: Array<CompColor>;
};

// create a variable to store the array of colors, specify the array type as being ColorJSON
const ColorList: ColorJSON[] = data;

// function to create React components for each element in ColorList
const ColorDiv = () => {
    // use map to create a div component for each element
    const colormap = ColorList.map(i => {
        // create a constant to style the element's color using the hex property
        const css_color: string = `#${i.hex}`;
        // map out a list of comparable colors using the comp property
        const comparable_colors = i.comp.map(i => {
            const comp_css_color: string = `#${i.hex}`;
            return (
                <li key={i.name} style={{ color: comp_css_color, border: '5px solid', borderColor: comp_css_color, padding: '10px', margin: '5px' }}>
                    Hex: {i.hex} ({i.name})
                </li>
            );
        });
        return (
            <div style={{ color: css_color, border: '5px solid', borderColor: css_color, padding: '10px', margin: '10px' }} key={i.hex}>
                Hex: {i.hex} <br />
                Name: {i.name} <br />
                Comparable Colors: {comparable_colors} <br />
            </div>
        );
    });
    return <div>{colormap}</div>;
};

function App() {
    console.info('hi hello');
    console.info(ColorList);
    return (
        <div>
            <ColorDiv />
        </div>
    );
}

export default App;
