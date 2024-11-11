import os
from PIL import Image
from io import BytesIO
from pathlib import Path

def optimize_image(image_path, output_path, quality=80):
    """
    Optimizes an image by compressing it without significant quality loss.
    
    Args:
        image_path (str): The path to the input image file.
        output_path (str): The path to the output image file.
        quality (int, optional): The quality of the optimized image, ranging from 0 (worst) to 100 (best). Defaults to 80.
    """
    try:
        # Open the image
        image = Image.open(image_path)
        
        # Save the optimized image
        image.save(output_path, optimize=True, quality=quality)
        
        print(f"Optimized '{image_path}' to '{output_path}'.")
    except Exception as e:
        print(f"Error optimizing '{image_path}': {e}")

def optimize_images_in_directory(input_dir, output_dir, quality=80):
    """
    Optimizes all images in a directory and saves the optimized versions to another directory.
    
    Args:
        input_dir (str): The path to the directory containing the input images.
        output_dir (str): The path to the directory where the optimized images will be saved.
        quality (int, optional): The quality of the optimized images, ranging from 0 (worst) to 100 (best). Defaults to 80.
    """
    # Create the output directory if it doesn't exist
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    # Iterate through all files in the input directory
    for filename in os.listdir(input_dir):
        if filename.endswith(('.jpg', '.png', '.gif')):
            # Construct the full input and output paths
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, filename)
            
            # Optimize the image
            optimize_image(input_path, output_path, quality)

# Example usage
optimize_images_in_directory('./', './output_images', quality=80)