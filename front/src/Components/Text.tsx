import { Typography } from 'antd'
import { TextProps } from 'antd/es/typography/Text'

const {Text: AntdText} = Typography

type Props =  TextProps & {
    fw?:number| string;
    fs?: number |string;
   
}

const Text = ({style, fw= 400, fs=16,...props}: Props) => <AntdText 
style={{
    fontWeight: fw,
    fontSize: fs,
    
    
    ...style
}}
 {...props}
/>

export default Text