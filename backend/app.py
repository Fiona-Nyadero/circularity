from flask import Flask, jsonify
from flask_cors import CORS
import json
import pandas as pd

app = Flask(__name__)
CORS(app)

# Helper function to load data
def load_data():
    with open('cbo_data.json', 'r') as f:
        return json.load(f)

# Route 1: Get all CBOs
@app.route('/api/cbos', methods=['GET'])
def get_cbos():
    data = load_data()
    return jsonify(data)

# Route 2: Get Aggregated Impact
@app.route('/api/impact', methods=['GET'])
def get_impact():
    data = load_data()
    df = pd.DataFrame(data) 
    
    # We use Pandas to do the math instantly
    # Normalize the metrics column (expand the dictionary into columns)
    metrics_df = pd.json_normalize(df['metrics'])
    
    total_waste = float(metrics_df['waste_collected_kg'].sum())
    total_trees = int(metrics_df['trees_planted'].sum())
    total_jobs = int(metrics_df['jobs_created'].sum())
    
    return jsonify({
        "total_waste": total_waste,
        "total_trees": total_trees,
        "total_jobs": total_jobs,
        "cbo_count": len(data)
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)