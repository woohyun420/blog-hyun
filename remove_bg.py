from PIL import Image
import os

def remove_black(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            alpha_val = max(r, g, b)
            if alpha_val == 0:
                img.putpixel((x, y), (0, 0, 0, 0))
            else:
                nr = min(255, int(r * 255 / alpha_val))
                ng = min(255, int(g * 255 / alpha_val))
                nb = min(255, int(b * 255 / alpha_val))
                img.putpixel((x, y), (nr, ng, nb, alpha_val))

    img.save(out_path, "PNG")

img_file = 'src/assets/navilogo.png'
if os.path.exists(img_file):
    print("Processing image to remove black background...")
    remove_black(img_file, img_file)
    print("Done!")
else:
    print("Image not found at", img_file)
