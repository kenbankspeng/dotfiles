import re

def extract_all_name_values(file_path):
    pattern = re.compile(r'<key>name</key>\s*<string>([^<]+)</string>')
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    matches = pattern.findall(content)
    return matches

if __name__ == "__main__":
    file_path = '/Users/ken/Documents/Software/DevBox/dotfiles/yazi/Catppuccin-mocha.tmTheme'  # Replace with the actual file path
    values = extract_all_name_values(file_path)
    for value in values:
        print(value)
