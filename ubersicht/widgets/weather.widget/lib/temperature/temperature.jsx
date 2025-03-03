import { styled } from "uebersicht";
// import { colors } from "../theme.js";

// .temperature {
//   fill: ${colors.text};
// }

const Svg = styled("svg")`
  display: block;

  .one {
    fill: #301fff;
  }

  .two {
    fill: #ddd;
  }

  .three {
    fill: #3147ed;
  }

  .four {
    fill: #8480ff;
  }

  .five {
    fill: #00c100;
  }

  .six {
    fill: #41e79a;
  }

  .seven {
    fill: #ffa100;
  }

  .eight {
    fill: #0f8ea8;
  }
  
  .nine {
    fill: #0f0;
  }

  .ten {
    fill: #00a900;
  }

  .eleven {
    fill: red;
  }

  .twelve {
    fill: none;
    stroke: #3200ff;
    stroke-width: 4.04px;
  }
`;

// style="fill:#301fff"
// style="fill:#ddd"
// style="fill:#3147ed"
// style="fill:#8480ff"
// style="fill:#00c100"
// style="fill:#41e79a"
// style="fill:#ffa100"
// style="fill:#0f8ea8"
// style="fill:#0f0"
// style="fill:#00a900"
// style="fill:red"
// style="fill:none;stroke:#3200ff;stroke-width:4.04px"
export const Temperature = (props) => {
	return (
		<Svg viewBox="0 0 86 222" {...props}>
			<title>Temperature</title>
			<path
				className="one"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.576 -471.262)"
			/>
			<path
				className="two"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.416 -441.262)"
			/>
			<path
				className="three"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.046 -486.262)"
			/>
			<path
				className="four"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.206 -456.262)"
			/>
			<path
				className="five"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.046 -545.87)"
			/>
			<path
				className="six"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.206 -516.262)"
			/>
			<path
				className="seven"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="matrix(.6937 0 0 1 -169.046 -576.228)"
			/>
			<path
				className="eight"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.576 -501.262)"
			/>
			<path
				className="nine"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.576 -532.295)"
			/>
			<path
				className="ten"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.416 -561.295)"
			/>
			<path
				className="eleven"
				d="M324.417 606.228h20.16v4.067h-20.16z"
				transform="translate(-268.416 -591.262)"
			/>
			<path
				className="twelve"
				d="M317.904 616.381c6.435 4.584 10.634 12.106 10.634 20.601 0 13.951-11.326 25.277-25.277 25.277s-25.278-11.326-25.278-25.277c0-8.264 3.975-15.607 10.115-20.221l.529-153.935c.024-7.141 6.722-12.922 14.947-12.901s14.882 5.837 14.858 12.978z"
				transform="translate(-268.932 -437.99)scale(.98902)"
			/>
		</Svg>
	);
};

/* <g transform="matrix(1.2 0 0 1.2 -71 -678)">
				<clipPath id="a">
					<path d="M91.667 711.561C96.604 714.018 100 719.115 100 725c0 8.279-6.721 15-15 15s-15-6.721-15-15c0-5.885 3.396-10.982 8.333-13.439v-129.23A6.67 6.67 0 0 1 85 575.664a6.67 6.67 0 0 1 6.667 6.667z" />
				</clipPath>
				<g clip-path="url(#a)">
					<use
						xlink:href="#b"
						width="36"
						height="198"
						x="13"
						y="12.797"
						transform="translate(59.167 565)scale(.83333)"
					/>
				</g>
			</g>
			<defs>
				<image
					xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCADGACQDAREAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAEFBgcEAv/EACQQAAEDBAICAgMAAAAAAAAAAAAUFWEBE1JiAqEEEiNRAxFT/8QAHAEBAQACAwEBAAAAAAAAAAAAAAEFBgMEBwII/8QAHxEBAAIBBQEBAQAAAAAAAAAAABMUYQEREhVRAgMi/9oADAMBAAIRAxEAPwDg2zlieXWX68t6DZyxFkt6I2csRZ0W3oNtcRYLeg21xqLBa0ehMmnRrVxp/YZGSuAuLfyjJXAXMl/IyadC5kv5Rkrh0W4t/LsFXj/z4mEj+/XnPd6eirx8OAj+/V7rT0U+PhxEf36vdaeinxv58SR/fp3Wnoo8bDiI/v1e6+fXGumxnazxjvcq6bErL3uR02FZe9yOm3YrHe5V027FZe9y5b5cjLfy8pt/p6fNlUfyXP09PmyqX+S5+np+/wA2VRt8rc/T0/f5sqjb5Ln6etJPB1JGIlE8CQlE8F5rIieBzJBPBZCVrp4OhIx0ongSEongsiyFiC8yRE8CQkbCeDpc2OlE8DmSongSEongSLIJ4EhI/d0ydLDkhLopYIS6KWCAukpEBdFIgfBek3Kjhl4FvEo4IC8KOCAuiikBdFDBAz7pulHDMwF0lAgLsiikBekUFgL0koEDPum7UMMzAXpJQwkBekUMEBeklDBAXpFDBAx1cm5U2ZgFckpkCK5FMgVXsKZAK5FNIGGok2asy0Ip2FYiFEisRCiRWIhRIrETKvSZyFkI1vSISMvSISMvCHQjLoh0I3xexkODs7HsOBsvtUcDY96jgcT3qOBxaCCv0day+9kQV+hZNhBX6Fg2EHL6FhNhBy+hYNnbNNcTWrmXJsjRXHotw2GmuIuGw01x6Fw2Rp1Fw2ejMlcDT72XJsMlcBfybDJp0W/k2Rkrh0L+TiMtcBfybPUmHWho/YOXZGLUvYGyMOvQ7DJsMOnQ7DJsjDp0XsMnF0phn0AAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
					id="b"
					width="36"
					height="198"
				/>
			</defs> 
*/
